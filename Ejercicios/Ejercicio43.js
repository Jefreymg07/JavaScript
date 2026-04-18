class JugadorCompetitivo {
  constructor(gamerTag, puntosRank) {
    this._gamerTag = gamerTag;
    this._puntosRank = puntosRank;
  }
  get gamerTag() {
    return this._gamerTag.toUpperCase();
  }
  set gamerTag(playerName) {
    this._gamerTag = playerName;
  }
  get puntosRank() {
    return this._puntosRank;
  }
  set puntosRank(rankedPoints) {
    if (rankedPoints < 0) {
      this._puntosRank = 0;
    } else if (rankedPoints > 5000) {
      this._puntosRank = 5000;
    } else {
      this._puntosRank = rankedPoints;
    }
  }
}

const dafran = new JugadorCompetitivo("Dafran", 0);

console.log(dafran);

dafran.puntosRank -= 100;

console.log(dafran);

dafran.puntosRank = 8000;

console.log(dafran);

console.log(dafran.gamerTag);
