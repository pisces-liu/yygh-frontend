import request from '@/utils/request'

const api_name = '/admin/hosp/hospital-set'

export default {
  // 查询医院列表信息
  // 如果携带的是普通参数，params：对象
  // 如果携带的是 json 数据：data：searchObj
  getHospitalPage(current, limit, searchObj) {
    return request({
      url: `${api_name}/${current}/${limit}`,
      method: 'POST',
      data: searchObj
    })
  },
  // 根据 id 删除医院信息
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  // 保存医院信息
  save(hospset) {
    return request({
      url: `${api_name}/saveHospSet`,
      method: 'post',
      data: hospset
    })
  },
  // 根据 id 获取医院信息
  getById(id) {
    return request({
      url: `${api_name}/getHospSet/${id}`,
      method: 'get'
    })
  },
  // 根据 id 更新医院信息
  updateById(hospset) {
    return request({
      url: `${api_name}/updateHospSet`,
      method: 'post',
      data: hospset
    })
  },
  // 批量删除医院设置
  removeRows(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  // 锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: `${api_name}/lockHospitalSet/${id}/${status}`,
      method: 'post'
    })
  }
}
