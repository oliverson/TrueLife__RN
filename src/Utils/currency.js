export const moneyFormat = ({money = 0, currency = 'đ'}) => {
  let n = 0;
  if (money) {
    n = money;
  }
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '' + currency;
};
