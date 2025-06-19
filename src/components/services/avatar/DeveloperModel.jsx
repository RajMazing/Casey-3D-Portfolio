import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph } from '@react-three/fiber'
import * as THREE from 'three'

export function DeveloperModel({ animationName = 'idle' }) {
  const { scene: baseScene } = useGLTF('/developerModel.glb')
  const model = useMemo(() => SkeletonUtils.clone(baseScene), [baseScene])
  const group = useRef()
  const { nodes, materials } = useGraph(model)

  // Load external animation (.fbx or .glb)
  const animationFBX = useFBX(`/models/${animationName}.fbx`) // or useGLTF if using .glb
  animationFBX.animations[0].name = animationName // Rename for consistency

    // ADD THIS CODE HERE - Clean up the animation tracks
  useEffect(() => {
    if (animationFBX.animations[0]) {
      animationFBX.animations[0].tracks = animationFBX.animations[0].tracks.filter(track => 
        !track.name.includes('Armature.quaternion')
      );
    }
  }, [animationFBX, animationName]);

  const { actions } = useAnimations([animationFBX.animations[0]], group)

  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName]
        .reset()
        .setLoop(THREE.LoopRepeat)
        .play()
    }
    return () => actions[animationName]?.fadeOut(0.3)
  }, [actions, animationName])

  return (
    <group ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.002']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Beard" geometry={nodes.Wolf3D_Beard.geometry} material={materials.Wolf3D_Beard} skeleton={nodes.Wolf3D_Beard.skeleton} morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/developerModel.glb')
