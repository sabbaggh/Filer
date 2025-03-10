import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function containerProductoMainPage({onPress, titulo, overview, imagen }) {
    return (
        <TouchableOpacity onPress={onPress} className="max-w-xl w-full h-44 flex flex-row mb-6">
            <View className="w-5/12 h-full p-2">
                <Image source={imagen} className='h-full w-full' resizeMode='contain'/>
            </View>
            <View className="flex flex-col w-7/12 overflow-hidden">
                <Text className="text-3xl break-normal">{titulo}</Text>
                <Text className="text-red-500 text-base mb-2">Product overview</Text>
                <Text className="break-all h-20 text-xs">{overview}</Text>
                <Text className="text-xs bottom-0 absolute w-full z-10 bg-white">see more...</Text>
            </View>
        </TouchableOpacity>
    )
}