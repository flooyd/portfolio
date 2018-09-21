/* Building a game in Unreal Engine. This was the closest window
nearby so I used it for pseudocode for instanced static mesh generation :D
//for(let z = 0; z < 2; z++) {
  for(let x = 0; x < 1; x++) {
    for(let y = 0; y < 1; y++) {
      //add cube at (x, y, z)
      //increase y
    }
    set y to 0;
    set x to x + 100;
  }
  set x to 0;
  set z to z + 100;
}
*/
console.log('hi');
function onMouseOver() {
  let target = window.event.target;
  console.log(target);
  if(target.id === 'email') {
    target.innerHTML = 'floydtjones@gmail.com';
    target.parentElement.href = 'mailto:floydtjones@gmail.com';
  } else {
    target.innerHTML = '325-660-5664';
    target.parentElement.href= 'tel:325-660-5664';
  }
}

function onMouseExit() {

}