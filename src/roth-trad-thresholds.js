const RothTradThresholds = (() => {
  const twentyOneTwo = {
    rothIRA: {
      singleThreshold: {
        threshOne: 125000,
        threshTwo: 126500,
        threshThree: 128000,
        threshFour: 129500,
        threshFive: 131000,
        threshSix: 132500,
        threshSeven: 134000,
        threshEight: 135500,
        threshNine: 137000,
        threshTen: 138500,
        threshEleven: 140000
      },
      marriedJointThreshold: {
        threshOne: 198000,
        threshTwo: 19900,
        threshThree: 200000,
        threshFour: 201000,
        threshFive: 202000,
        threshSix: 203000,
        threshSeven: 204000,
        threshEight: 205000,
        threshNine: 206000,
        threshTen: 207000,
        threshEleven: 208000,
      },
      marriedSeperateThreshold: {
        threshOne: 0,
        threshTwo: 1000,
        threshThree: 2000,
        threshFour: 3000,
        threshFive: 4000,
        threshSix: 5000,
        threshSeven: 6000,
        threshEight: 7000,
        threshNine: 8000,
        threshTen: 9000,
        threshEleven: 10000,
      },
      maxContUnderFifty: {
        threshOne: 6000,
        threshTwo: 5400,
        threshThree: 4800,
        threshFour: 4200,
        threshFive: 3600,
        threshSix: 3000,
        threshSeven: 2400,
        threshEight: 1800,
        threshNine: 1200,
        threshTen: 600,
        threshEleven: 0,
      },
      maxContOverFifty: {
        threshOne: 7000,
        threshTwo: 6300,
        threshThree: 5600,
        threshFour: 4900,
        threshFive: 4200,
        threshSix: 3500,
        threshSeven: 2800,
        threshEight: 2100,
        threshNine: 1400,
        threshTen: 700,
        threshEleven: 0,
      },
    },
    tradIRA: {
      singleThreshold: {
        threshOne: 66000,
        threshTwo: 76000,
      },
      marriageJointOne: {
        threshOne: 105000,
        threshTwo: 125000
      },
      marriageJointTwo: {
        threshOne: 198000,
        threshTwo: 208000
      },
      deductionUnderFifty: {
        threshOne: 6000,
      },
      deductionOverFifty: {
        threshOne: 7000
      }
    }
  }
  const twentyTwentyOne = {
    rothIRA: {
      singleThreshold: {
        threshOne: 124000,
        threshTwo: 125500,
        threshThree: 127000,
        threshFour: 128500,
        threshFive: 130000,
        threshSix: 131500,
        threshSeven: 133000,
        threshEight: 134500,
        threshNine: 136000,
        threshTen: 137500,
        threshEleven: 139000
      },
      marriedJointThreshold: {
        threshOne: 196000,
        threshTwo: 19700,
        threshThree: 198000,
        threshFour: 199000,
        threshFive: 200000,
        threshSix: 201000,
        threshSeven: 202000,
        threshEight: 203000,
        threshNine: 204000,
        threshTen: 205000,
        threshEleven: 206000,
      },
      marriedSeperateThreshold: {
        threshOne: 0,
        threshTwo: 1000,
        threshThree: 2000,
        threshFour: 3000,
        threshFive: 4000,
        threshSix: 5000,
        threshSeven: 6000,
        threshEight: 7000,
        threshNine: 8000,
        threshTen: 9000,
        threshEleven: 10000,
      },
      maxContUnderFifty: {
        threshOne: 6000,
        threshTwo: 5400,
        threshThree: 4800,
        threshFour: 4200,
        threshFive: 3600,
        threshSix: 3000,
        threshSeven: 2400,
        threshEight: 1800,
        threshNine: 1200,
        threshTen: 600,
        threshEleven: 0,
      },
      maxContOverFifty: {
        threshOne: 7000,
        threshTwo: 6300,
        threshThree: 5600,
        threshFour: 4900,
        threshFive: 4200,
        threshSix: 3500,
        threshSeven: 2800,
        threshEight: 2100,
        threshNine: 1400,
        threshTen: 700,
        threshEleven: 0,
      },
    },
    tradIRA: {
      singleThreshold: {
        threshOne: 65000,
        threshTwo: 75000,
      },
      marriageJointOne: {
        threshOne: 104000,
        threshTwo: 124000
      },
      marriageJointTwo: {
        threshOne: 196000,
        threshTwo: 206000
      },
      deductionUnderFifty: {
        threshOne: 6000,
      },
      deductionOverFifty: {
        threshOne: 7000
      }
    }
  }
  return {
    getThresholds: (option) => {
      if(option === '21-22') return twentyOneTwo
      if(option === '20-21') return twentyTwentyOne
    }
  }
})()