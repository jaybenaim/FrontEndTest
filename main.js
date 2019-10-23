window.addEventListener("load", function() {
  prevClick();
  nextClick();
});

const prevClick = () => {
  const nextImage = [
    "images/zucorians1.jpg",
    "images/zucorians4.jpg",
    "images/zucorians6.jpg",
    "images/zucorians2.jpg",
    "images/zucorians3.jpg",
    "images/zucorians5.jpg"
  ];
  let image1 = $("#image-1");
  let image2 = $("#image-2");
  let image3 = $("#image-3");
  const prevBtn = $(".previous-button");

  prevBtn.click(() => {
    image1.attr("src", nextImage[0]);
    image2.attr("src", nextImage[1]);
    image3.attr("src", nextImage[2]);
    let l = nextImage.shift();
    nextImage.push(l);
  });
};

const nextClick = () => {
  const nextImage = [
    "images/zucorians1.jpg",
    "images/zucorians4.jpg",
    "images/zucorians6.jpg",
    "images/zucorians2.jpg",
    "images/zucorians3.jpg",
    "images/zucorians5.jpg"
  ];
  let image1 = $("#image-1");
  let image2 = $("#image-2");
  let image3 = $("#image-3");
  const nextBtn = $(".next-button");

  nextBtn.click(() => {
    image1.attr("src", nextImage[0]);
    image2.attr("src", nextImage[1]);
    image3.attr("src", nextImage[2]);
    let l = nextImage.pop();
    nextImage.unshift(l);
  });
};
