let imageNumber = 1;
let imageCount = 3;

const introImage = document.querySelector( ".myCoolImage" );

if ( introImage ) {

  introImage.addEventListener( "click", function( ) {

    if ( imageNumber < imageCount ) imageNumber++;
    else window.location.href = "subpages/landingPage.html";

    introImage.src = `assets/images/image_${ imageNumber }.gif`;
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

  const characterSpans = paragraph.querySelectorAll( 'span' );
  characterSpans.forEach( function( span ) {

    if ( span.innerText != ' ' && span.innerText != '.' ) {
      const character = span.innerText.toLowerCase( );

      span.addEventListener( 'mouseenter', function( ) {
        const filename = `../assets/images/${ character }.gif`;

        document.body.style.backgroundImage = `url(${  filename})`;

        console.log( filename );
      } );
    }
  } );
} );