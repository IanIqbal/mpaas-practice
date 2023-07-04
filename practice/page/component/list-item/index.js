const thumb =
  'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ';
Page({
  data: {
    title: 'Single list table1',
    extra: 'detailed information',
    arrow: true,
    upperSubtitle: 'Top subtitle',
    lowerSubtitle: '',
    thumb,
    borderRadius: false,
    useThumb: true,
    thumbSize: 40,
    primarySlotTypes: ['No content', 'label', 'Question mark icon'],
    supSlotTypes: ['No content', 'label', 'Question mark icon', 'Tick Icon', 'Text content'],
    secSlotTypes: [
      'No content',
      'Text content',
      'label',
      'Question mark icon',
      'Tick Icon',
      'switch',
      'Capsule button',
      'list-secondary',
    ],
    supSlotIndex: 0,
    secSlotIndex: 0,
    titleSlotIndex: 0,
    upperSlotIndex: 0,
    lowerSlotIndex: 0,
    titleTagText: 'label',
    upperTagText: 'label',
    lowerTagText: 'label',
    supTagText: 'label',
    supText: 'Text content',
    secTagText: 'label',
    secText: 'detailed information',
    titleIconSize: 17,
    upperIconSize: 17,
    lowerIconSize: 17,
    supIconSize: 17,
    secIconSize: 17,
    titlePositions: ['top', 'middle', 'bottom'],
    titlePosIndex: 0,
    secondary: {
      title: 'Secondary information',
      subtitle: 'Secondary auxiliary information',
      thumb,
      useThumb: false,
      thumbSize: undefined,
    },
  },
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    if (name) {
      this.setData({
        [name]: e.detail.value,
      });
    }
  },
  setSecInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    if (name) {
      this.setData({
        secondary: {
          ...this.data.secondary,
          [name]: e.detail.value,
        },
      });
    }
  },
});
