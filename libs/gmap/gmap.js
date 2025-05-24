/**
 * 自定义overlay
 * @param point 经纬度点
 * @param content html元素或字符串
 */
window.G7SMap = {};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay = function(point, content, option) {
  // google的onadd方法执行比较晚，所以将初始化准备工作全部放在创建实例时处理
  this._div = document.createElement('div');
  if (typeof content === 'string') {
    this._div.innerHTML = content;
  } else {
    this._div.appendChild(content);
  }
  this._point = point;
  this._content = content;
  this._option = Object.assign(window.G7SMap, {
    pane: 'floatPane',
    offset: [0, 0],
    position: ['center', 'middle'], // overlay默认的位置
    textSelect: true
  }, option || {});
};

// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype = new google.maps.OverlayView();

// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.onAdd = function() {
  // eslint-disable-next-line no-unused-vars
  var self = this;
  var div = this._div;
  if (div && div.style) {
    div.style.position = 'absolute';
  }
  this.panes = this.getPanes()[this._option.pane];
  div && this.panes.appendChild(div);
  this.setContent(this._content);
};

// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.draw = function() {
  var self = this;
  var overlayProjection = self.getProjection();
  if (!overlayProjection) {
    return;
  }
  var pixel = overlayProjection.fromLatLngToDivPixel(self._point);
  if (!this._div) {
    return;
  }
  var width = this._div.offsetWidth;
  var height = this._div.offsetHeight;
  var left = pixel.x; var top = pixel.y;

  // 以覆盖物中心点为定位原点
  switch (this._option.position[0]) {
    case 'center':
      left -= width / 2;
      break;
    case 'right':
      left -= width;
      break;
  }
  switch (this._option.position[1]) {
    case 'middle':
      top -= height / 2;
      break;
    case 'bottom':
      top -= height;
      break;
  }
  this._div.style.left = left + this._option.offset[0] + 'px';
  this._div.style.top = top + this._option.offset[1] + 'px';

  if (this._option.textSelect) {
    // 设置文本是否可选
    this._div.style.WebkitUserSelect = '';
    this._div.style.MozUserSelect = '';
    this._div.style.cursor = 'text';
    this._div.addEventListener('mousedown', function(e) {
      e.stopPropagation();
    });
  }
};

// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.onRemove = function() {
  if (this._div && this._div.parentNode) {
    this._div.parentNode.removeChild(this._div);
  }
  this._div = null;
};

// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.isShow = function() {
  return this._div.style.visibility !== 'hidden';
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.isVisible = function() {
  return this._div.style.visibility !== 'hidden';
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.hide = function() {
  if (this._div) {
    this._div.style.visibility = 'hidden';
  }
};

// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.show = function() {
  if (this._div) {
    this._div.style.visibility = 'visible';
  }
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.setContent = function(content) {
  var div = this._div;
  this._content = content;
  if (div) {
    div.innerHTML = '';
    if (typeof content === 'string') {
      div.innerHTML = this._content;
    } else {
      div.appendChild(this._content);
    }
  }
  this.draw();
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.redraw = function() {
  this.draw();
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.setPosition = function(point) {
  this._point = point;
  this.draw();
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.setOption = function(option) {
  this._option = Object.assign({}, this._option, option || {});
  this.draw();
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.getDom = function() {
  return this._div;
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.remove = function() {
  this.onRemove();
};
// eslint-disable-next-line no-undef
G7SMap.CustomOverlay.prototype.addEvent = function(type, fn) {
  // eslint-disable-next-line no-undef
  return google.maps.event.addDomListener(this._div, type, fn);
};
