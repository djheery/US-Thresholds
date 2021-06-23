const ThresholdsApp = (() => {
  const ui = ThresholdUI.getSelectors()
  const loadEventListeners = () => {
    ui.selectContainers.forEach(c => c.addEventListener('change', ThresholdUI.changeTable) );
  }
  return {
    init: () => {
      loadEventListeners()
      ThresholdUI.RothThresholds('21-22')
      ThresholdUI.TraditionalThresholds('21-22')
    }
  }
})(ThresholdUI)

ThresholdsApp.init()