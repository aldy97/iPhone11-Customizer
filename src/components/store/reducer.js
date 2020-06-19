const defaultState = {
  headerItemList: ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'],
  titleList: ['Buy iPhone 11 Pro', 'Buy iPhone 11 Pro Max'],
  titleIndex: 0,
  subtitle: 'Get up to $350 off with trade-in*',
  TradeInOptions: [
    { left: 'Yes', right: 'From $1029', price: 1029 },
    { left: 'No', right: 'From $1379', price: 1379 },
  ],
  ModelOptions: [
    { left: 'iPhone 11 Pro', right: 'From $1379', price: 1379 },
    { left: 'iPhone 11 Pro Max', right: 'From $1519', price: 1579 },
  ],
  ModelSelected: 0,
  FinishOptionList: [
    {
      url:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-space-201909?wid=96&hei=96&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567037347439',
      text: 'Space Grey',
    },
    {
      url:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-silver-201909?wid=96&hei=96&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567037347352',
      text: 'Silver',
    },
    {
      url:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-midnight-green-201909?wid=96&hei=96&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567185915728',
      text: 'Midnight Green',
    },
    {
      url:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/finish-gold-201909?wid=96&hei=96&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567037348220',
      text: 'Gold',
    },
  ],
  CapacityList: [
    { cap: '64GB', text: ['$1,379.00', '$1,519.00'] },
    { cap: '256GB', text: ['$1,589.00', '$1,729.00'] },
    { cap: '512GB', text: ['$1,859.00', '$1,999.00'] },
  ],
};

export default (state = defaultState, action) => {
  return state;
};
