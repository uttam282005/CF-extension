const tags = document.getElementsByClassName("tag-box");
const problemSetTags = document.getElementsByClassName("notice");
for (const tag of problemSetTags) {
  tag.innerText = "";
}
for (const tag of tags) {
  tag.innerText = "";
}
