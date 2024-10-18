var a = ((l) => (
    (l.Home = "/lottery"),
    (l.Favourite = "/lottery/favourite"),
    (l.MyBets = "/lottery/mybets"),
    (l.AllLotteries = "/lottery/allLotteries"),
    (l.PicksForYou = "/lottery/allLotteries?sort=lottery_picks_for_you"),
    (l.BcLottery = "/lottery/detail/0"),
    (l.Popular = "/lottery/allLotteries?sort=lottery_popular"),
    l
  ))(a || {}),
  i = ((l) => (
    (l[(l.Waiting = 0)] = "Waiting"),
    (l[(l.Active = 10)] = "Active"),
    (l[(l.Drawing = 20)] = "Drawing"),
    (l[(l.Calulating = 30)] = "Calulating"),
    (l[(l.Settling = 40)] = "Settling"),
    (l[(l.Finished = 50)] = "Finished"),
    (l[(l.Cancelled = 60)] = "Cancelled"),
    l
  ))(i || {}),
  r = ((l) => (
    (l[(l.Success = 0)] = "Success"),
    (l[(l.Balance = 10)] = "Balance"),
    (l[(l.Period = 20)] = "Period"),
    l
  ))(r || {});
export { r as B, a as I, i as L };
