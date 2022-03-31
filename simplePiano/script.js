function handleClick(note) {
  var notes = `Notes(c octave)/`+note+`.wav`;
  var audio = new Audio(notes);
  console.log(audio);
  audio.play();
}