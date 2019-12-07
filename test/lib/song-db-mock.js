const songDbMock = {
  sample: ({ firstLetter = 'y' } = {}) => {
    const titleMap = {
      y: 'YEAH RIGHT',
      T: 'Toxic',
      c: 'Chop Suey'
    }
    return { title: titleMap[firstLetter] }
  }
}

module.exports = { songDbMock }
