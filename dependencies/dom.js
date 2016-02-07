function dom() {

  return {
    get totalIncome() {

    },
    set totalIncome(a) {
      document.getElementById("totalIncome").innerText=a
    },
    set totalExpense(a) {
      document.getElementById("totalExpenses").innerText=a
    },
    click:function(id,fn){
      document.getElementById(id).addEventListener('click',fn)
    }


  }


}
module.exports = dom