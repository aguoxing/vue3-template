export default [
  {
    url: '/mock/blog/article/list',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'ok',
        data: {
          totalCount: 10,
          currPage: 1,
          list: [
            {
              id: '123',
              title: 'hello',
              author: 'admin',
              summary: 'test',
              createTime: '2022-01-01',
              content: '# hello'
            }
          ]
        }
      }
    }
  },
  {
    url: '/mock/blog/article/details/123',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'ok',
        data: {
          id: '123',
          title: 'hello',
          author: 'admin',
          summary: 'test',
          createTime: '2022-01-01',
          content: '# hello'
        }
      }
    }
  }
]
