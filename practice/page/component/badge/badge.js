Page({
  data: {
    items: [
      {
        dot: true,
        text: '',
        isWrap: true,
        intro: 'Dot Badge',
      },
      {
        dot: false,
        text: 1,
        isWrap: true,
        intro: 'Text Badge',
      },
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: 'Number',
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: 'number overflow Count',
      },
      {
        dot: false,
        text: 'new',
        isWrap: false,
        intro: 'text',
      },
      {
        dot: false,
        text: '22222222222222',
        isWrap: false,
        intro: 'middle in arrow',
        withArrow: true,
        direction: 'middle',
      },
      {
        dot: false,
        text: 'left arrow',
        isWrap: false,
        intro: 'left of arrow',
        withArrow: true,
        direction: 'left',
      },
      {
        dot: false,
        text: 'right arrow',
        isWrap: false,
        intro: 'right of arrow',
        withArrow: true,
        direction: 'right',
      },
    ],
  },
});
