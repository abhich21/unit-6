var listElm = document.querySelector('#infinite-list');

// Add 25 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement('li');
    item.innerText = 'Masai Student ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore();