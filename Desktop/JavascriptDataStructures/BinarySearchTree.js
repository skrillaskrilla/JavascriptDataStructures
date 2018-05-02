// Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6
/* Recursion example
function func() {
  if(//base case){
    
  }else {
    func()
  }
}
ecursion
function factorial(num){
  if(num === 1){
    return num;
  }else{
    return num * factorial(num -1);
  }
}

factorial(4);
*/
// Binary Search Tree
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
// Binary Search Tree 
// Insert function in to the BST binary search tree
BST.prototype.insert = function(value) {
  if(value <= this.value){
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value){
    if(!this.right) this.right = new BST(value)
    else this.right.insert(value);
  }
};
// Checks whether or not the value that is passed exists in the binary search tree.
BST.prototype.contains = function(value){
  if(value === this.value) return true;
  else if(value < this.value){
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }
};
// It will touch all the nodes in the tree from least to greatest.
BST.prototype.depthFirstTravesal = function(iteratorFunc, order){
  if(order === 'pre-order') iteratorFunc(this.value);
  if(this.left) this.left.depthFirstTravesal(iteratorFunc, order);
  if(order === 'in-order') iteratorFunc(this.value);
  if(this.right) this.right.depthFirstTravesal(iteratorFunc, order);
  if(order === 'post-order') iteratorFunc(this.value);
};
// breadthFirstTravesal method that iterates through the tree accordingly to hierarchy
BST.prototype.breadthFirstTravesal = function(iteratorFunc){
  var queue = [this];
  while (queue.length){
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};
BST.prototype.getMinVal = function(){
  if(this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(30);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log('MIN: ', bst.getMinVal());
console.log('MAX: ', bst.getMaxVal());
/*
function log(node){
  console.log(node.value);
}
*/

/* Insert method search test 
console.log(bst.right.right); 100
*/
/* Contains method tester
console.log(bst.contains(85)); true
console.log(bst.contains(15)); false
*/
//bst.depthFirstTravesal(log, 'pre-order');
//bst.depthFirstTravesal(log, 'in-order');
//bst.depthFirstTravesal(log, 'post-order');
//bst.breadthFirstTravesal(log);
/* log function for depthFirstTravesal 
function log(value){
  console.log(value);
}
*/