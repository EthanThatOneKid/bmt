const THE_NEXT_LOGICAL_STEP = `<a href="https://youtu.be/4Zo41lhz6Ls">
    <img src="https://img.youtube.com/vi/4Zo41lhz6Ls/0.jpg" alt="The Next Logical Step">
</a>`;

export function prank(nothingBut = THE_NEXT_LOGICAL_STEP) {
  document.body.innerHTML = nothingBut;
}
