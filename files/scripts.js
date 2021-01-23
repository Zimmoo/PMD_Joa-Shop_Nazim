let images = [
    './img/d2c1f8d57f3ebb4f344d002b15dc792e',
    './img/cfc761eaed057431e27ee7ceaca27da0'
  ];
  
  let current = 0;
  
  function next() {
    console.log('NEXT');
    if (current+1 < images.length) {
      current++;
      document.getElementById('main_product').src = images[current];
      document.getElementById('prev').style.color = '#ff845a';
      if (current === images.length-1) {
        document.getElementById('next').style.color = 'silver';
      }
    }
  }
  
  function prev() {
    console.log('PREV');
    if (current-1 > -1) {
      current--;
      document.getElementById('main_product').src = images[current];
      document.getElementById('next').style.color = '#ff845a';
      if (current === 0) {
        document.getElementById('prev').style.color = 'silver';
      }
    }
  }
  
  
  
  document.getElementById('next').onclick = next;
  document.getElementById('prev').onclick = prev;