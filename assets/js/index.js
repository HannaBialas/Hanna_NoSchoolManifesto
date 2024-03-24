let imageNumber = 1;
let imageCount = 3;

const introImage = document.querySelector( ".myCoolImage" );
const clickSound = new Audio('assets/sounds/paper.mp3');

if ( introImage ) {

  introImage.addEventListener( "click", function( ) {

    if ( imageNumber < imageCount ) imageNumber++;
    else {
      setTimeout( function( ) {
        window.location.href = "subpages/landingPage.html";
      }, 2500 );
    }

    introImage.src = `assets/images/image_${ imageNumber }.gif`;
   
    introImage.src = `assets/images/image_${imageNumber}.gif`;
    clickSound.play();
  
  } );
}

// querySelector selects any element in your document
// document.querySelector(".myCoolText")

// After selectng your Element, you can add an event to it
// you can change click for any event yhou like, just google it
// document.querySelector("myCoolText").addEventListener("click")

//Now, we need to say what happens when the event happens.


const manifestParagraphs = document.querySelectorAll( '.landing-text p' ); 

let excludedChars = "0123456789., -'";
excludedChars = excludedChars.split( '' );

manifestParagraphs.forEach( function( paragraph ) {
  const chars = paragraph.innerText.split( '' );
  let html = `<span>${ chars.join( '</span><span>' ) }</span>`;

  excludedChars.forEach( function( char ) {
    html = html.replace( `<span>${ char }</span>`, char );
  } );

  paragraph.innerHTML = html;

  const columnLft = document.querySelector('.left');
  const columnRgt = document.querySelector('.right');

  const characterSpans = paragraph.querySelectorAll( 'span' );
  characterSpans.forEach( function( span ) {

    if ( span.innerText != ' ' && span.innerText != '.' ) {
      const character = span.innerText.toLowerCase( );

      span.addEventListener( 'mouseenter', function( ) {
        const imagefile = `../assets/images/${ character }.gif`;
        const img = document.createElement('img');
        img.src = imagefile;

        columnLft.innerHTML = '';
        columnLft.appendChild(img);


        columnRgt.innerHTML = '';

        const textFile = `../assets/texts/${ character }.txt`;
        ( async () => {
          const text = await (await fetch(textFile)).text( );

          columnRgt.innerHTML = `<p>${ text }</p>`;


          const imagefile = `../assets/images/${ character }1.gif`;
          const img = document.createElement('img');
          img.src = imagefile;

          columnRgt.prepend( img );
        } )( );

        // document.body.style.backgroundImage = `url(${  filename})`;

        // console.log( filename );
      } );
    }
  } );
} );