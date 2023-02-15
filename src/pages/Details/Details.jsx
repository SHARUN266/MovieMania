import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import Cast from './Cast/Cast';
import DetailsBanner from './DetailBanner/DetailsBanner';

export default function Details() {
  
  const {mediaType,id}=useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  
  return (
    <div>
      <DetailsBanner   video={data?.results?.[0]} crew={credits?.crew}  />
      <Cast data={credits?.cast} loading={creditsLoading}   />
    </div>
  )
}
