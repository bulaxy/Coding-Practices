const areSymmetric = (node1, node2) => {
    if (node1 === undefined && node2 === undefined) return true
    if (node1?.value !== node2?.value) return false
    return (areSymmetric(node1.left, node2.right) && areSymmetric(node1.right, node2.left))
}