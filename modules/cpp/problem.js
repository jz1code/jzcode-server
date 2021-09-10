/**
 * 题目相关的操作
 */

let Problem = jzcode.model('problem')

/**
 * 获取题库列表
 */
app.get('/problems', async (req, res) => {
    try {
        logger.debug('获取题目列表')
        // 只能列出使用者有权限查看的题目, 要求注册帐号, 才可以查看题目
        let query = Problem.createQueryBuilder()
        
        res.send({ success: true, data: '' })
    } catch (error) {
        logger.debug(error)
    }
})

/**
 * 获取:id指定题目的内容
 */
app.get('/problem/:id', async (req, res) => {
    try {
        // 权限检查, 1. 是否公开题  2. 是否有修改权限 
        logger.debug('获取题目详细内容')
        res.send({ success: true, data: '' })
    } catch (error) {
        
    }
})

/**
 * 保存题目
 */
app.post('/problem', async (req, res) => {

})

/**
 * 更新:id 指定的题目
 */
app.put('/problem/:id', async (req, res) => {
    
})

/**
 * 删除:id 指定的题目
 */
app.delete('/problem/:id', async (req, res) => {
    
})

/**
 * 提交答案, 开始测试
 */
app.put('/problem/:id/submit', async (req, res) => {
    
})

/**
 * 公开:id 指定的题目
 */
app.put('/problem/:id/public', async (req, res) => {
    
})

/**
 * 取消公开:id 指定的题目
 */
app.put('/problem/:id/unpublic', async (req, res) => {
    
})


