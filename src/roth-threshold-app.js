const ThresholdsApp = (() => {
  const ui = ThresholdUI.getSelectors()
  const loadEventListeners = () => {
    ui.selectContainers.forEach(c => c.addEventListener('change', ThresholdUI.changeTable) );
  }
  return {
    init: () => {
      loadEventListeners()
    }
  }
})(ThresholdUI)

ThresholdsApp.init()