import React, { useEffect, useState } from 'react'
import './style.css'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Height } from '@mui/icons-material';

export default function Slider() {
    const [slider, setSlider]=useState();
    useEffect(()=>{
        (async()=>{
            try{
                const res=await fetch('http://localhost:1337/api/sliders?populate=image');
                const data=await res.json();
                setSlider(data.data);
            }catch(error){

            }   
        })();

    },[])

    const items = slider?.map((e, index)=> (<SwiperSlide key={index}>
      <img src={import.meta.env.VITE_BASE_URL+ e.image.url}  />
    </SwiperSlide>));
    console.log(items)
  return (
    <>
    <Box sx={{marginTop:0.1}}>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider"
      >
        {items}
      </Swiper>


    </Box>
      
    </>
  )
}

