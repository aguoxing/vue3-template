import request from '@/utils/request'

const service_name = 'blog/article'

// 查询文章内容列表
export function listArticle(data) {
  return request({
    url: `/${service_name}/list`,
    method: 'post',
    data: data
  })
}

// 查询文章内容详细
export function getArticle(id) {
  return request({
    url: `/${service_name}/details/` + id,
    method: 'get'
  })
}

// 新增文章内容
export function addArticle(data) {
  return request({
    url: `/${service_name}`,
    method: 'post',
    data: data
  })
}

// 修改文章内容
export function updateArticle(data) {
  return request({
    url: `/${service_name}`,
    method: 'put',
    data: data
  })
}

// 删除文章内容
export function delArticle(ids) {
  return request({
    url: `/${service_name}/` + ids,
    method: 'delete'
  })
}
