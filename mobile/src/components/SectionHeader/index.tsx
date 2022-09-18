import React from 'react';
import { View, Text, StyleProp, TextStyle, ViewProps } from 'react-native';

import { styles } from './styles';

interface SectionHeaderProps extends ViewProps {
    title: string;
    description?: string;
    mt?: number;
}

export function SectionHeader({ title, description, mt = 0, ...rest }: SectionHeaderProps) {
  return (
    <View style={styles.container} { ...rest }>
        <Text style={{ 'marginTop': mt, ...styles.title }}>
            { title }
        </Text>
        {
            description && (
                <Text style={styles.description}>
                    { description }
                </Text>
            )
        }
    </View>
  );
}