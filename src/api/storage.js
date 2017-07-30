const _works = [
  {
    id: 1,
    title: '24health.by',
    description: 'Ololo',
    imageThumbs: require('@/assets/images/cases/24health.by/24health-by-thumbs.jpg'),
    indexPage: true
  },
  {
    id: 2,
    title: '24health.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/24health.by/24health-by-thumbs.jpg'),
    indexPage: true
  },
  {
    id: 3,
    title: '24health.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/24health.by/24health-by-thumbs.jpg'),
    indexPage: true
  },
  {
    id: 4,
    title: 'masterbin.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/masterbin.by/masterbin-by-thumb.jpg'),
    indexPage: true
  },
  {
    id: 5,
    title: 'masterbin.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/masterbin.by/masterbin-by-thumb.jpg'),
    indexPage: false
  },
  {
    id: 6,
    title: 'kiselyovasalon.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/kiselyovasalon.by/kiselyovasalon-by-thumb.jpg'),
    indexPage: true
  },
  {
    id: 7,
    title: 'kiselyovasalon.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/kiselyovasalon.by/kiselyovasalon-by-thumb.jpg'),
    indexPage: true
  },
  {
    id: 8,
    title: 'kiselyovasalon.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/24health.by/24health-by-thumbs.jpg'),
    indexPage: true
  },
  {
    id: 9,
    title: 'kiselyovasalon.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/kiselyovasalon.by/kiselyovasalon-by-thumb.jpg'),
    indexPage: true
  },
  {
    id: 10,
    title: 'kiselyovasalon.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/24health.by/24health-by-thumbs.jpg'),
    indexPage: true
  },
  {
    id: 11,
    title: 'kiselyovasalon.by',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    imageThumbs: require('@/assets/images/cases/kiselyovasalon.by/kiselyovasalon-by-thumb.jpg'),
    indexPage: true
  }
]

export default {
  getWorks (cb) {
    setTimeout(() => cb(_works), 100)
  }
}
