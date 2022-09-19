import React from "react"
import {Table} from "antd"
import css from './index.module.less'

/**
 * @description: 基础表格参数
 * @typedef  {Object} BasicTableProps
 * @property {String} rowKey 表格行key
 * @property {Object} tableProps 表格属性
 * @property {Array}  columns 表格列
 * @property {Array}  dataSource 表格数据
 * @property {String} pagination 是否显示分页
 * @property {String} currentPage 当前页
 * @property {String} pageSize 分页大小
 * @property {String} total 总数
 * @property {Function} onChangePage 分页改变时触发
 * @property {Function} onChangePageSize 分页大小改变时触发
 * @link https://ant.design/components/table-cn/
 */

/**
 * @description: 基础表格 封装分页相关逻辑 其他逻辑可以自行封装
 * @param {BasicTableProps} props
 * @returns {JSX.Element}
 * @constructor
 */
const BasicTable = (props) => {
  // 唯一key
  const {rowKey} = props
  // 扩展表格的属性
  const {tableProps} = props
  // 数据源
  const {dataSource, columns} = props
  // 分页相关
  const {onChangePage, onShowSizeChange} = props
  const {pagination = true} = props
  const {showSizeChanger} = props
  const {currentPage, pageSize, total} = props

  // 分页参数
  let paginationConfig = {
    // 当前页数
    current: currentPage || 1,
    // 每页条数
    pageSize: pageSize || 10,
    // 数据总数
    total: total || 0,
    // 快速跳转到某一页
    showQuickJumper: true,
    // 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
    showSizeChanger: showSizeChanger || false,
    // 用于显示数据总量和当前数据顺序
    showTotal: (total, range) => {
      return `共 ${total} 条记录`
    },
    // 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
    onChange: (pageNumber) => {
      onChangePage && onChangePage(pageNumber)
    },
    // pageSize 变化的回调，参数是改变后的 pageSize
    onShowSizeChange: (current, pageSize) => {
      onShowSizeChange && onShowSizeChange(current, pageSize)
    }
  }

  return (
    <div>
      <Table
        {...tableProps}
        rowKey={rowKey}
        dataSource={dataSource}
        columns={columns}
        pagination={pagination ? paginationConfig : false}
        className={css.table}
      />
    </div>
  )
}

export default BasicTable
