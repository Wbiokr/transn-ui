Vue.filter('changeType',
  v=>{
    switch(Number(v)){
      case 0:
        return 'Boolean';
      case 1:
        return 'String';
      case 2:
        return 'Function';
      case 3:
        return 'Object';
      case 4:
        return 'Array';
      case 5:
        return 'Number';
      default:
        return '不限';
    }
  }
)