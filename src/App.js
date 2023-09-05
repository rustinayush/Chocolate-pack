import React from "react";
import "./App.css";
import CustomPack from "./CustomPack";

const App = () => {
  const chocolates = [
    {
      id: 1,
      name: "Milk Chocolate",
      price: 2.5,
      src: "https://media.gettyimages.com/id/1170698495/photo/eating-chocolate.jpg?s=2048x2048&w=gi&k=20&c=rb20I-xL2QnN0WMRRmNuAqc6Gq4-zyPcsQ2sVKdmUIY=",
    },
    {
      id: 2,
      name: "Dark Chocolate",
      price: 3.0,
      src: "https://media.gettyimages.com/id/1219580866/photo/chocolate-bars-and-cocoa-powder-shot-from-above.jpg?s=2048x2048&w=gi&k=20&c=EVaKeODkH0XUteDTrUNgeWBeGZC7oeBb0jRUpfBRzWw=",
    },
    {
      id: 3,
      name: "Milky bar",
      price: 4.0,
      src: "https://media.gettyimages.com/id/1394204312/photo/flying-chocolate-pieces-fresh-dark-brown-chocolate-fragments.jpg?s=2048x2048&w=gi&k=20&c=4Hcy-1EaBYo0IGs_MTDa9rdRqslMMkTP68RVqvacYIo=",
    },
    {
      id: 4,
      name: "Cocoa solid",
      price: 3.0,
      src: "https://media.gettyimages.com/id/185111228/photo/dark-chocolate.jpg?s=2048x2048&w=gi&k=20&c=f-s69uyE7YYxU54UMO3-Ythpf40q8ZlfugDJCG85u64=",
    },
    {
      id: 5,
      name: "Cadbury",
      price: 6.0,
      src: "https://media.gettyimages.com/id/1209981764/photo/chocolate-chunks-frosting-and-cocao.jpg?s=2048x2048&w=gi&k=20&c=yQzi5tofn-bN5PolnypWlJ2TRdsvwHLguu2qSFIx3Sg=",
    },
    {
      id: 6,
      name: "Twix",
      price: 5.0,
      src: "https://media.gettyimages.com/id/183255573/photo/chocolate-collection-on-a-silk-ackground.jpg?s=2048x2048&w=gi&k=20&c=unhpgrMSkY77zl3tOv6YHucEXpInfY_Om1zj8E7EhvY=",
    },
    {
      id: 7,
      name: "Ruby",
      price: 10.0,
      src: "https://media.gettyimages.com/id/1287486309/photo/chocolate-frosting-being-poured-onto-chocolate-cake-with-pink-background.jpg?s=1024x1024&w=gi&k=20&c=u3Q6zd-7wgHPPf8tuke23DR4YdrycDXf32VFyZHN6O4=",
    },
    {
      id: 8,
      name: "Kit Kat",
      price: 4.0,
      src: "https://media.gettyimages.com/id/131549968/photo/chocolate-candy-in-heart-shaped-box.jpg?s=2048x2048&w=gi&k=20&c=t8jCu9_wuBLtJkuop6dqfCBEZRsCAuAo5Jup2x0_VYI=",
    },
    {
      id: 9,
      name: "Aero",
      price: 8.0,
      src: "https://media.gettyimages.com/id/85784543/photo/chocolate-box-full-of-assorted-chocolates.jpg?s=2048x2048&w=gi&k=20&c=L3uCJs-B0Pds8GL-AxLrsTJrML-IQc6qBuLZnbYP7T8=",
    },
    {
      id: 10,
      name: "Amul",
      price: 7.0,
      src: "https://media.gettyimages.com/id/1300099757/photo/dark-chocolate-bar-dip-in-melted-chocolate.jpg?s=2048x2048&w=gi&k=20&c=bDjtp0-UJCQI_bIw5nDxgx2HhJz0_sD_1EVECZa82Ks=",
    },
    {
      id: 11,
      name: "Campco",
      price: 9.0,
      src: "https://media.gettyimages.com/id/82878799/photo/stacked-chocolate-chunks.jpg?s=2048x2048&w=gi&k=20&c=wtWXdNOz_ZU9zt8m2Jz2UFaFeJV_nQCTgie6qSbxVNI=",
    },
    {
      id: 12,
      name: "Barone",
      price: 6.0,
      src: "https://media.gettyimages.com/id/1267076689/photo/valentines-day-box-of-chocolates-and-red-roses.jpg?s=2048x2048&w=gi&k=20&c=betPaoRfZQ5akDrIMiz0N4lxa7WlF3ov7t9RIPbsv0E=",
    },
    {
      id: 13,
      name: "ButterFinger",
      price: 5.0,
      src: "https://media.gettyimages.com/id/1088417240/photo/assorted-chocolate-nuts-and-dried-fruit-in-old-fashioned-style.jpg?s=2048x2048&w=gi&k=20&c=tgOumbsMTRjfba8vn-NVAWmJv18ZSmSQGKNPUzph4qc=",
    },
    {
      id: 14,
      name: "Hershey",
      price: 2.0,
      src: "https://media.gettyimages.com/id/88436066/photo/chocolates.jpg?s=2048x2048&w=gi&k=20&c=vk97xt-yAlCiaXpGtJEEmqknXu1-BEMsiZczQanecm4=",
    },
    {
      id: 15,
      name: "Snickers",
      price: 1.0,
      src: "https://media.gettyimages.com/id/1189235789/photo/chocolate-mousse-desserts-concept.jpg?s=2048x2048&w=gi&k=20&c=Cj3movETaXBnVP3cVW3qU6lFukYCh7nIE3dwob92haI=",
    },
  ];

  return (
    <div className="App">
      <CustomPack chocolates={chocolates} />
    </div>
  );
};

export default App;
