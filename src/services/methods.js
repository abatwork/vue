export const OBJ = {
  //проверка, что объект не пустой
  isFullObject: function(obj) {
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
          return true;//не пустой
        }
      }
      return false;//пустой
  }
}
