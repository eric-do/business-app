import React from 'react';
import {
  Box,
  Text,
  VStack,
  Flex,
} from '@chakra-ui/react';

interface StatInfo {
  unit: string;
  stat: string;
}

export const StatsList = ({ stats }: { stats: StatInfo[] }) => {
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.unit}
          unit={stat.unit}
          stat={stat.stat}
        />
      ))}
    </Flex>
  );
};

export const StatCard = ({ unit, stat }: StatInfo) => {
  return (
    <VStack
      alignItems='flex-start'
      w={{
        base: '100%',
        md: '270px'
      }}
      mb={{
        base: 10,
        md: 0
      }}
    >
      <Text
        textTransform={'uppercase'}
        fontWeight={600}
      >
        {unit}
      </Text>
      <Text
        textTransform={'uppercase'}
        fontWeight={600}
        fontSize={70}
        textShadow='5px 5px 0 #ffc1ee'
      >
        {stat}
      </Text>
    </VStack>
  );
};
