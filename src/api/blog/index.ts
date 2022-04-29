import request from '@/utils/request'

const service_name = 'api/blog'

// 查询文章内容列表
export function listArticle(data) {
  return request({
    url: `/${service_name}/article/list`,
    method: 'post',
    data: data
  })
}

// 查询文章内容详细
export function getArticle(id) {
  return request({
    url: `/${service_name}/article/details/` + id,
    method: 'get'
  })
}

// 文章归档集合
export function listArticleTimeLine() {
  return request({
    url: `/${service_name}/article/timeLine`,
    method: 'get'
  })
}

// 查询文章评论列表
export function listArticleComment(data) {
  return request({
    url: `/${service_name}/comment/tree`,
    method: 'post',
    data: data
  })
}
