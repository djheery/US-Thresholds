const ThresholdsApp = (() => {
  const ui = ThresholdUI.getSelectors()
  const loadEventListeners = () => {
    ui.selectContainers.forEach(c => c.addEventListener('change', ThresholdUI.changeTable) );
  }
  let contPosition = ui.pageContainer.getBoundingClientRect()
  window.addEventListener('scroll', e => {
    if(window.pageYOffset >= contPosition.y){
      ui.linkWidget.style.position = 'sticky'
    } else {
      ui.linkWidget.style.position = 'absolute'
    }
  })
  window.addEventListener('DOMContentLoaded', e => {
    const containerHeight = document.querySelector('.bacc__page-container__inner-container').clientHeight
    document.querySelector('.bacc__link-widget-container').style.height = containerHeight + 'px'
  })
  return {
    init: () => {
      loadEventListeners()
      ThresholdUI.RothThresholds('21-22')
      ThresholdUI.TraditionalThresholds('21-22')
      ThresholdUI.IncomeTaxThresholds('21-22')
    }
  }
})(ThresholdUI)

ThresholdsApp.init()