/**
 * 
 */

const fs = require('fs')

global.Promise = require('bluebird')
global.jzcode = {
    api: '/api/v1',
    logger: require('./lib/logger'),
    production: true,
    config: require('./config.json'),
    modules: [],
    model(name) {
        return require(`./models-built/${name}`).default;
    },
    async run() {
        global.logger = require('./lib/logger')
        logger.info('开始启动后台服务...')
        this.load_plugins()
        this.connect_database()
        this.load_hooks()
        this.load_models()
        this.load_scratch_modules()
        this.load_cpp_modules()
        this.provide_service()
    },
    async load_plugins() {
        logger.info('加载插件...')
        let Express = require('express');
        let http = require('http')
        global.app = Express();
        app.server = http.createServer(app);

    },
    async connect_database() {
        logger.info('连接数据库...')
        const TypeORMMysqlDriver = require('typeorm/driver/mysql/MysqlDriver');
        const OriginalNormalizeType = TypeORMMysqlDriver.MysqlDriver.prototype.normalizeType;
        TypeORMMysqlDriver.MysqlDriver.prototype.normalizeType = function (column) {
          if (column.type === 'json') {
            return 'longtext';
          }
          return OriginalNormalizeType(column);
        };
    
        const TypeORM = require('typeorm');
        global.TypeORM = TypeORM;
    
        const modelsPath = __dirname + '/models/';
        const modelsBuiltPath = __dirname + '/models-built/';
        const models = fs.readdirSync(modelsPath)
                         .filter(filename => filename.endsWith('.ts') && filename !== 'common.ts')
                         .map(filename => require(modelsBuiltPath + filename.replace('.ts', '.js')).default);
    
        await TypeORM.createConnection({
          type: 'mariadb',
          host: this.config.db.host.split(':')[0],
          port: this.config.db.host.split(':')[1] || 3306,
          username: this.config.db.username,
          password: this.config.db.password,
          database: this.config.db.database,
          entities: models,
          synchronize: true,
          logging: !jzcode.production,
          extra: {
            connectionLimit: 50
          }
        });
    },
    async load_hooks(){
        logger.info('加载拦截器')
    },
    async load_models() {
        logger.info('加载数据模型...') 
    },
    async load_scratch_modules() {
        logger.info('加载 scratch 模块...')
        fs.readdir(__dirname + '/modules/scratch/', (err, files) => {
            if (err) {
                logger.error(err);
                return;
            }
            files.filter((file) => file.endsWith('.js'))
                 .forEach((file) => this.modules.push(require(`./modules/scratch/${file}`)));
        });
    },
    async load_cpp_modules() {
        logger.info('加载 C++ 题库模块...')
        fs.readdir(__dirname + '/modules/cpp/', (err, files) => {
            if (err) {
                logger.error(err);
                return;
            }
            files.filter((file) => file.endsWith('.js'))
                 .forEach((file) => this.modules.push(require(`./modules/cpp/${file}`)));
        });
        logger.info('连接判题机...')
    },
    async provide_service() {
        logger.info('系统启动正常, 开始对外提供服务')
        app.server.listen(parseInt(jzcode.config.port), jzcode.config.hostname, () => {
            logger.info(`桔子编程系统正在监听主机 ${jzcode.config.hostname}:${parseInt(jzcode.config.port)}...`);
          });
    
    }

}

jzcode.run()
// jzcode.logger.info('hello')