const INFINITE_TITLE_MAP = {
  y: 'YEAH RIGHT',
  T: 'Toxic',
  c: 'Chop Suey'
}

const TITLE_MAP_WITH_NOT_FOUND_LETTERS = {
  y: 'YEAH RIGHT!!!',
  T: 'Toxic Poison',
  c: 'Chop Suey'
}

class SongDbMock {
  constructor() {
    this.titleMap = INFINITE_TITLE_MAP
  }
  sample({ firstLetter = 'y' } = {}) {
    const title = this.titleMap[firstLetter]
    return title ? { title } : null
  }

  _setMode(mode) {
    switch (mode) {
      case 'withNotFoundLetters':
        this.titleMap = TITLE_MAP_WITH_NOT_FOUND_LETTERS
        return
      default:
        this.titleMap = INFINITE_TITLE_MAP
    }
  }
}

module.exports = { SongDbMock }
