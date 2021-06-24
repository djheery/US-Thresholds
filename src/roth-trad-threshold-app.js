const ThresholdsApp = (() => {
  const ui = ThresholdUI.getSelectors()
  const loadEventListeners = () => {
    ui.selectContainers.forEach(c => c.addEventListener('change', ThresholdUI.changeTable) );
  }
  let contPosition = ui.pageContainer.getBoundingClientRect()
  window.addEventListener('scroll', e => {
    if(window.pageYOffset >= contPosition.y){
      ui.linkWidget.style.position = 'fixed'
    } else {
      ui.linkWidget.style.position = 'absolute'
    }
  })
  return {
    init: () => {
      loadEventListeners()
      ThresholdUI.RothThresholds('21-22')
      ThresholdUI.TraditionalThresholds('21-22')
    }
  }
})(ThresholdUI)

ThresholdsApp.init()