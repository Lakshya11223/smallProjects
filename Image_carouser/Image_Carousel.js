
const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Mountain Landscape',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Ocean Sunset View',
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Autumn Forest Path',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Urban City Skyline',
    },
  ];
  const arr = [
    'Beautiful Mountain Landscape',
    'Ocean Sunset View',
    'Autumn Forest Path',
    'Urban City Skyline',
  ];

  console.log(images[0].url)
  let count = 0;
 
  const imagedibba = document.getElementById('carouselTrack');
  const prevbutton = document.getElementById('prevButton');
  const nextbutton = document.getElementById('nextButton');
  const sidebar = document.getElementById('sidebar');
  let carouselNav = document.getElementById('carouselNav');

  let imgi = document.createElement('img');
  imgi.style.width = '100%';
  imgi.style.height = '100%';
  imagedibba.appendChild(imgi);
  imgi.style.objectFit='cover';

    nextbutton.addEventListener('click',function(){
    imgi.src = images[count].url;
    
    sidebar.innerHTML = arr[count];
    
    count++;
    if(count == 4){
        count = count%4
    }
    

  })
  prevbutton.addEventListener('click',function(){
    imgi.src = images[count].url;
   
   sidebar.innerHTML = arr[count];
   count--;
  
    if(count == -1){
        count = 3
    }
   
  })
  


  
  // system for autoplay -> i sse code of if else 
 const btnauto = document.getElementById('autoPlayButton');
 let i=0;

 let interval = null;
btnauto.addEventListener('click',function(){
  if(!interval){
   interval = setInterval(function(){
    
    imgi.src = images[i].url;
    sidebar.innerHTML = arr[i];
    i = (i+1)%4;
    
  },3000)
  btnauto.innerHTML = 'Stop Autoplay';
  }

 else {
  clearInterval(interval);
  interval = null;
  btnauto.innerHTML = 'Start AutoPlay'
 }
 // console.log(interval);
  
}
)


// not able to add dots