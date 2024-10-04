function showSurprise() {
    var surprise = document.getElementById('surprise');
    if (surprise.style.display === 'none' || surprise.style.display === '') {
      surprise.style.display = 'block';
    } else {
      surprise.style.display = 'none';
    }
  }
  