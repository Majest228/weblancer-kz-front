import React, { useState } from "react"
import CheckboxTree from "react-checkbox-tree"
import Category from "./Category/Category"
import styles from "./../Filters.module.scss"
import { useAppDispatch } from "../../../../../hooks/hooks"
import { updateCategories } from "../../../../../store/filters/filters.slice"

const Categorys = ({ categorys = [] }: any) => {
  const nodes = categorys.map((category: any) => {
    console.log(category)
    return {
      value: category.name,
      label: category.name,
      children: category.children?.map((tag: any) => {
        return {
          value: tag.name,
          label: tag.name,
          children: tag.children?.map((tags: any) => {
            return {
              value: tags.name,
              label: tags.name,
            }
          }),
        }
      }),
    }
  })
  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState([])
  const [expanded, setExpanded] = useState([])
  console.log(checked, expanded)
  return (
    <div className={styles.checkbox__tree}>
      {/*{categorys.map((category: any) => (*/}
      {/*  <Category name={category.name} children={category.children} />*/}
      {/*))}*/}
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => {
          dispatch(updateCategories(checked))
          setChecked(checked)
        }}
        onExpand={(expanded) => setExpanded(expanded)}
      />
    </div>
  )
}

export default Categorys
