case class Node(key: Int, 
                value: Int, 
                var left: Node = null, 
                var right: Node = null)

class LruCache(_capacity: Int) {
    private var size: Int = 0
    private var head: Node = Node(-1, -1)
    private var tail: Node = Node(-1, -1)
    head.right = tail
    tail.left = head
    private var indexMap = collection.immutable.Map[Int, Node]()

    def removeFromList(node: Node): Unit = {
        node.left.right = node.right
        node.right.left = node.left
    }

    def putFront(node: Node): Unit = {
        node.right = head.right
        head.right.left = node
        head.right = node
        node.left = head
    }

    def get(key: Int): Int = {
        indexMap
            .get(key)
            .map { node =>
                removeFromList(node)
                putFront(node)
                node.value
            }
            .getOrElse(-1)
    }

    def put(key: Int, value: Int): Unit = {
        val node = indexMap.get(key) match {
            case Some(node) => 
                removeFromList(node)
                node.copy(value = value)
            case _ =>
                if (_capacity == size) {
                    indexMap -= tail.left.key
                    removeFromList(tail.left)
                } else {
                    size += 1
                }
                Node(key, value)
            }
        putFront(node)
        indexMap += (key -> node)
    }
}
