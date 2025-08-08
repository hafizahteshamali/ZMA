import React from 'react'
import BlogList from './elements/BlogList'
import { BlogListData, FAQsHeadingData } from '../../assets/ConstantData'
import FAQs from '../home/elements/FAQs'

const Blog = () => {
  return (
    <>
      <BlogList BlogListData={BlogListData} />
    </>
  )
}

export default Blog