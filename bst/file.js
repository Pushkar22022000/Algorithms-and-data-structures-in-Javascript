class Node{
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}

class BST{
    constructor(data){
        this.root = new Node(data)
    }

    add(data){
        let newnode = new Node(data)

        let recursive_function = n => {
            if (data < n.data){
                if (!n.left){
                    n.left = newnode
                }
                else{
                    recursive_function(n.left)
                }
            }
            else if (data > n.data){
                if (!n.right){
                    n.right = newnode
                }
                else{
                    recursive_function(n.right)
                }
            }
        }

        recursive_function(this.root)
    }

    min(){
        let current = this.root

        while(current.left){
            current = current.left
        }

        return current.data
    }

    max(){
        let current = this.root

        while(current.right){
            current = current.right
        }

        return current.data
    }

    present(data){
        let current = this.root

        while(current){
            if (data === current){
                return true
            }

            if (data < current.data){
                current = current.left
            }
            else{
                current = current.right
            }
        }

        return false
    }

    // left, root, right
    inOrder(){
        let final = []
        const finding = n => {
            if (n.left){
                finding(n.left)
            }

            final.push(n.data)

            if (n.right){
                finding(n.right)
            }
        }

        finding(this.root)
        return final
    }
    
    // root, left, right
    preOrder(){
        let final = []
        const finding = n => {

            final.push(n.data)

            if (n.left){
                finding(n.left)
            }

            if (n.right){
                finding(n.right)
            }
        }

        finding(this.root)
        return final
    }

    // left, right, root
    postOrder(){
        let final = []
        const finding = n => {
            if (n.left){
                finding(n.left)
            }

            if (n.right){
                finding(n.right)
            }

            final.push(n.data)
        }

        finding(this.root)
        return final
    }


}

let bst = new BST(45)

bst.add(15)
bst.add(36)
bst.add(24)
bst.add(12)


console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())


console.log(bst)