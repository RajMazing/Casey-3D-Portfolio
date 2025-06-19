

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function AnimeModel(props) {
  const { nodes, materials } = useGLTF('/OnePiece.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['300.000.000']} position={[0.413, 1.297, -0.251]} scale={[0.335, 0.646, 0.448]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['1.500.000.000']} position={[1.261, 1.297, -0.113]} scale={[0.335, 0.646, 0.448]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['3.000.000.000']} position={[2.225, 1.297, -0.158]} scale={[0.335, 0.646, 0.448]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Mesa_tronco_de_medeira} position={[1.336, 0, -0.226]} />
    </group>
  )
}

useGLTF.preload('/OnePiece.glb')
