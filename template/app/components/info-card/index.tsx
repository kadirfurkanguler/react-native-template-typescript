import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {OrangeDot} from '@components';
import {Content} from './props';
import style from './style';
import {InfoCardProps} from './props';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@utils';
export const InfoCard = (props: InfoCardProps) => {
  const {header, contents} = props;
  const {key, value} = header;
  const renderContent = ({item}: {item: Content}) => {
    const {title, content, icon} = item;
    return (
      <View style={style.content}>
        <View style={style.icon}>
          {icon === 'orange-dot' ? (
            <OrangeDot />
          ) : (
            <Icon color={colors.primary} name={icon} size={20} />
          )}
        </View>
        <View style={style.contentTexts}>
          <Text style={style.contentTitle}>{title}</Text>
          <Text style={style.contentDesc}>{content}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.key}>
          {key}: <Text style={style.value}>{value}</Text>
        </Text>
      </View>
      <View style={style.flatlistContiner}>
        <FlatList
          keyExtractor={(item: Content, index: number) => `key-${index}`}
          data={contents}
          renderItem={renderContent}
        />
      </View>
    </View>
  );
};
