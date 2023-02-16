import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Recommendation from "./Carousel/Recommandations";
import Similar from "./Carousel/Similiar";
import Cast from "./Cast/Cast";
import DetailsBanner from "./DetailBanner/DetailsBanner";
import VideosSection from "./VideoSection/VideoSection";

export default function Details() {
  document.title="Details"
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation  mediaType={mediaType} id={id}  />
    </div>
  );
}
