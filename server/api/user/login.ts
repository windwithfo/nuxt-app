/**
 * login
 * @author dongkunshan(windwithfo@yeah.net)
 */

export default defineEventHandler(async (event) => {
  // await someAsyncFunction()
  return new Promise((resolve) => {
    resolve({
      msg: '根据code值返回实际辅助提示信息',
      count: 10
    })
  }) 
})
